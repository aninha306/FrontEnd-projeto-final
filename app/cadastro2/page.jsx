"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import style from "./cadastro2.module.css";
import Header from "../componets/header/header";
import Footer from "../componets/footer/footer";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Page() {
    const [cadastro, setCadastro] = useState([]);
    const [dados, setDados] = useState([]);
    const router = useRouter();

    const deletar = async (id) => {
        const url = `API/cadastro/${id}`;

        try {
            await axios.delete(url);
            setDados(dados.filter((cadastro) => cadastro.id !== id));
        } catch (error) {
            console.error("ERRO AO BUSCAR DADOS!", error);
        }
    };

    const atualizar = async (id) => {
        router.push(`/cadastro/${id}`);
    }

    useEffect(() => {
        async function BuscarObras() {
            try {
                const resposta = await axios.get("/API/cadastro");
                setCadastro(resposta.data);
                setDados(resposta.data);
            } catch (error) {
                console.error("ERRO AO BUSCAR DADOS!", error);
            }
        }
        BuscarObras();
    }, []);

    return (
        <div className={style.container}>
            <Header></Header>

            <div className={style.acoes}>
                <Link href="/cadastro/register">
                    <button className={`${style.button} ${style.primeirobtn}`}>
                        Cadastrar Obra
                    </button>
                </Link>
            </div>

            <div className={style.cadastroContainer}>
                <h1 className={style.mainprincipal}>Obras</h1>

                {dados.length ? (
                    <div className={style.obraList}>
                        {cadastro.map((cadastro) => (
                            <div key={cadastro.id} className={style.cadastro}>
                                <div className={style.infos}>
                                    <p>
                                        <strong>ID:</strong> {cadastro.id}
                                    </p>
                                    <p>
                                        <strong>Nome da Obra:</strong> {cadastro.nomeObra}
                                    </p>
                                    <p>
                                        <strong>Nome do Artista:</strong> {cadastro.artista}
                                    </p>
                                    <p>
                                        <strong>Data de Produção:</strong> {cadastro.dataProducao}
                                    </p>
                                    <p>
                                        <strong>Tipo de Obra:</strong> {cadastro.tipo}
                                    </p>
                                    <p>
                                        <strong>Idade do Artista:</strong> {cadastro.idadeArtista}
                                    </p>
                                </div>

                                <div className={style.buttons}>
                                    <button className={`${style.button}, ${style.deleteButton}`}
                                        onClick={() => deletar(cadastro.id)}
                                    >
                                        <FaTrash/>
                                        Deletar
                                    </button>
                                    <button className={`${style.button}, ${style.editButton}`}
                                        onClick={() => atualizar(cadastro.id)}>
                                            <FaEdit/>
                                            Atualizar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ):(
                    <p>{dados.message ? dados.message : "Carregando..."}</p>
                )}
            </div>
        </div>
    );
}