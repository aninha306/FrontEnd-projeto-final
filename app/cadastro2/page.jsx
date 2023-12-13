"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import style from "./cadastro2.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Page() {
    const [dados2, setDados2] = useState([]);
    const router = useRouter();

    const deletar = async (id) => {
        const url = `api/cadastro2/${id}`;

        try {
            console.log("Enviando dados:", { nomeObra, url, artista, dataProducao, tipo, idadeArtista });
            await axios.delete(url);
            setDados2(dados2.filter((cadastro) => cadastro.id !== id));
        } catch (error) {
            console.error("ERRO AO BUSCAR DADOS!", error);
        }
    };

    const atualizar = async (id) => {
        router.push(`/cadastro2/${id}`);
    }

    useEffect(() => {
        async function BuscarObras2() {
            try {
                const resposta = await axios.get("/api/artes");
                setDados2(resposta.data.artes);
            } catch (error) {
                console.error("ERRO AO BUSCAR DADOS bu!", error);
            }
        }
        BuscarObras2();
    }, []);

    return (
        <>
            <Header></Header>
            <div>
                <div className={style.container}>
                    <div className={style.acoes}>
                        <Link href="/cadastro2">
                            <button className={`${style.button} ${style.primeirobtn}`}>
                                Cadastrar Obra
                            </button>
                        </Link>
                    </div>

                    <div className={style.cadastroContainer}>
                        <h1 className={style.mainprincipal}>Obras Cadastradas</h1>
                        <div className={style.cadastro2}>
                            {dados2.length >0 ? (
                                <div className={style.obraList}>

                                    {
                                    dados2.map((artes) => (
                                        <div key={artes.id} className={style.artes}>
                                            <div className={style.infos}>
                                                <img src="{artes.url}" alt="img" />
                                                <p>
                                                    <strong>ID:</strong> {artes.id}
                                                </p>
                                                <p>
                                                    <strong>Nome da Obra:</strong> {artes.nomeObra}
                                                </p>
                                                <p>
                                                    <strong>Nome do Artista:</strong> {artes.artista}
                                                </p>
                                                <p>
                                                    <strong>Data de Produção:</strong> {artes.dataProducao}
                                                </p>
                                                <p>
                                                    <strong>Tipo de Obra:</strong> {artes.tipo}
                                                </p>
                                                <p>
                                                    <strong>Idade do Artista:</strong> {artes.idadeArtista}
                                                </p>
                                            </div>

                                            <div className={style.buttons}>
                                                <button className={`${style.button}, ${style.deleteButton}`}
                                                    onClick={() => deletar(artes.id)}
                                                >
                                                    <FaTrash />
                                                    Deletar
                                                </button>
                                                <button className={`${style.button}, ${style.editButton}`}
                                                    onClick={() => atualizar(artes.id)}>
                                                    <FaEdit />
                                                    Atualizar
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (


                                <p>{dados2.message ? dados2.message : ""}</p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
}






