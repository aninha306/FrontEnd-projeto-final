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
    const [cadastro, setCadastro] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    const deletar = async (id) => {
        const url = `API/register/${id}`;

        try {
            console.log("Enviando dados:", { nomeObra, url, artista, dataProducao, tipo, idadeArtista });
            await axios.delete(url);
            setDados(dados.filter((cadastro) => cadastro.id !== id));
        } catch (error) {
            console.error("BUUUU!", error);
        }
    };

    const atualizar = async (id) => {
        router.push(`/register/${id}`);
    }

    useEffect(() => {
        async function BuscarObras() {
            try {
                const resposta = await axios.get("/API/cadastro2");
                setCadastro(resposta.data);
                setDados(resposta.data);
            } catch (error) {
                console.error("ERRO AO BUSCAR DADOS bbbbb!", error);
            }
        }
        BuscarObras();
    }, []);

    return (
        <>
            <Header></Header>
            <div>
                <div className={style.container}>
                    <div className={style.acoes}>
                        <Link href="/colaboradores">
                            <button className={`${style.button} ${style.primeirobtn}`}>
                                Cadastrar Obra
                            </button>
                        </Link>
                    </div>

                    <div className={style.cadastroContainer}>
                        <h1 className={style.mainprincipal}>OIII</h1>
                        <div className={style.cadastro2}>
                            {dados.length ? (
                                <div className={style.obraList}>
                                    {artes.map((artes) => (
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


                                <p>{dados.message ? dados.message : ""}</p>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </>
    );
}






