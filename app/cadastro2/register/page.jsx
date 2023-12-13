'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./register.module.css";
import Link from "next/link";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Register() {
    const [nomeObra, setNome] = useState("");
    const [url, setImagem] = useState("");
    const [artista, setArtista] = useState("");
    const [dataProducao, setData] = useState("");
    const [tipo, setTipo] = useState("");
    const [idadeArtista, setIdade] = useState("");
    const [artes, setCadastro] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Enviando dados:", { nomeObra, url, artista, dataProducao, tipo, idadeArtista });
            await axios.post("/API/artes", { nomeObra, url, artista, dataProducao, tipo, idadeArtista });
            setNome("");
            setImagem("");
            setArtista("");
            Register("")
            setIdade("");
            router.push(`/cadastro2/`);
        } catch (error) {
            console.error("TA QUASE", error);
        }
    };
    useEffect(() => {
        async function BuscarObra() {
            try {
                const resposta = await axios.get("/API/artes");
                setCadastro(resposta.data.artes);
            } catch (error) {
                console.error("errooooo", error);
            }
        }
        BuscarObra();
    }, []);

    return (
        <>
            <Header></Header>
            <div className={style.container}>

                <div className={style.main}>
                    <div className={style.acoes}>
                        <Link href={`/cadastro2`}>
                            <button className={`${style.button} ${style.primeirobtn}`}>
                                Voltar para Obras
                            </button>
                        </Link>
                    </div>
                    <h1 className={style.mainprincipal}>Cadastrar Obras</h1>
                    <div className={style.cadastroContainer}>

                        <div className={style.imagem}>
                            <img src={'/cadastro.gif'} width={350} height={450} className={style.img} />
                        </div>



                        <form onSubmit={handleSubmit}>
                            <div className={style.box}>
                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="nomeObra"
                                        value={nomeObra}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        placeholder="Nome da Obra" />
                                    <hr className={style.hr} />
                                </div>
                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="url"
                                        value={url}
                                        onChange={(e) => setImagem(e.target.value)}
                                        required
                                        placeholder="Imagem da Obra" />
                                    <hr className={style.hr} />
                                </div>
                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="artista"
                                        value={artista}
                                        onChange={(e) => setArtista(e.target.value)}
                                        required
                                        placeholder="Nome do Artista" />
                                    <hr className={style.hr} />
                                </div>
                                <div className={style.forms}>

                                    <input type="date"
                                        className={style.input}
                                        id="dataProducao"
                                        value={dataProducao}
                                        onChange={(e) => setData(e.target.value)}
                                        required />
                                    <hr className={style.hr} />
                                </div>
                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="tipo"
                                        value={tipo}
                                        onChange={(e) => setTipo(e.target.value)}
                                        placeholder="Tipo da Obra"
                                        required />
                                    <hr className={style.hr} />
                                </div>
                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="idadeArtista"
                                        value={idadeArtista}
                                        onChange={(e) => setIdade(e.target.value)}
                                        required
                                        placeholder="Idade do Artista" />
                                    <hr className={style.hr} />
                                </div>
                                <button
                                    type="submit"
                                    className={`${style.button} ${style.submitButton}`}>
                                    Cadastrar
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}
