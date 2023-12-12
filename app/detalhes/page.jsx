"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import style from "./detalhes.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Page() {
    const [detalhes, setDetalhes] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    const deletar = async (id) => {
        const url = `api/detalhes/${id}`;

        try {
            await axios.delete(url);
            setDados(dados.filter((detalhes) => detalhes.id !== id));
        } catch (error) {
            console.error("ERRO AO BUSCAR DADOS!", error);
        }
    };

    const atualizar = async (id) => {
        router.push(`/detalhes/${id}`);
    }

    useEffect(() => {
        async function BuscarObras() {
            try {
                const resposta = await axios.get("/api/detalhes");
                setDetalhes(resposta.data);
                setDados(resposta.data);
            } catch (error) {
                console.error("ERRO AO BUSCAR DADOS!", error);
            }
        }
        BuscarObras();
    }, []);
    
    return (
        <>
            <Header></Header>

                <div className={style.container}>
                    <div className={style.detalhesContainer}>
                        <h1 className={style.mainprincipal}>Detalhes das Obras</h1>
                        <div className={style.detalhes}>
                            {dados.length ? (
                                <div className={style.obraList}>
                                    {cadastro.map((detalhes) => (
                                        <div key={detalhes.id} className={style.detalhes}>
                                            <div className={style.infos}>
                                                <img src="{detalhes.url}" alt="img" />
                                                <p>
                                                    <strong>ID:</strong> {detalhes.id}
                                                </p>
                                                <p>
                                                    <strong>Nome da Obra:</strong> {detalhes.nomeObra}
                                                </p>
                                                <p>
                                                    <strong>Nome do Artista:</strong> {detalhes.artista}
                                                </p>
                                                <p>
                                                    <strong>Data de Produção:</strong> {detalhes.dataProducao}
                                                </p>
                                                <p>
                                                    <strong>Tipo de Obra:</strong> {detalhes.tipo}
                                                </p>
                                                <p>
                                                    <strong>Idade do Artista:</strong> {detalhes.idadeArtista}
                                                </p>
                                                <p>
                                                    <strong>Detalhes da Obra:</strong> {detalhes.detalhes}
                                                </p>
                                            </div>

                                            <div className={style.buttons}>
                                                <button className={`${style.button}, ${style.deleteButton}`}
                                                    onClick={() => deletar(detalhes.id)}
                                                >
                                                    <FaTrash />
                                                    Deletar
                                                </button>
                                                <button className={`${style.button}, ${style.editButton}`}
                                                    onClick={() => atualizar(detalhes.id)}>
                                                    <FaEdit />
                                                    Atualizar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p>{dados.message ? dados.message : ""}</p>
                            )}
                        </div>
                    </div>
                </div>

                <Footer></Footer>
        </>
    );
}
