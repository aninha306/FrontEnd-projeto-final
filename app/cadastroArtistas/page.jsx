'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from "./cadastroA.module.css"
import Link from "next/link";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";

export default function Register() {
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [idade, setIdade] = useState("");
    const [artistas, setArtistas] = useState([]);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log("Enviando dados:", { nome, idade, imagem });
            await axios.post("/api/artistas", { nome, idade, imagem});
            setNome("");
            setIdade("");
            setImagem("");
            setArtistas("");
           
            
            router.push(`/artistas/`);
        } catch (error) {
            console.error("TA QUASE BOBOCA", error);
        }
    };
    useEffect(() => {
        async function BuscarObra() {
            try {
                const resposta = await axios.get("/API/artistas");
                setCadastro(resposta.data);
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
                        <Link href={`/`}>
                            <button className={`${style.button} ${style.primeirobtn}`}>
                                Voltar para Home
                            </button>
                        </Link>
                    </div>
                    <h1 className={style.mainprincipal}>Deseja ser membro? </h1>
                    <h1 className={style.mainprincipal}>e increva!</h1>
                    <div className={style.cadastroContainer}>

                        <div className={style.imagem}>
                            <img src={'/Van-1.gif'} width={390} height={450} className={style.img} />
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className={style.box}>
                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="nome"
                                        value={nome}
                                        onChange={(e) => setNome(e.target.value)}
                                        required
                                        placeholder="Nome." />
                                    <hr className={style.hr} />
                                </div>
                                <div className={style.forms}>

                                <div className={style.forms}>

                                    <input type="text"
                                        className={style.input}
                                        id="idade"
                                        value={idade}
                                        onChange={(e) => setIdade(e.target.value)}
                                        required
                                        placeholder="Idade do Artista" />
                                    <hr className={style.hr} />
                                </div>

                                <input type="text"
                                        className={style.input}
                                        id="imagem"
                                        value={imagem}
                                        onChange={(e) => setImagem(e.target.value)}
                                        required
                                        placeholder="Imagem da Obra" />
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