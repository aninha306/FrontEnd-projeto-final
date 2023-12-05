'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import style from "./id.module.css"; 
import Header from "@/app/componets/header/header";
import Footer from "@/app/componets/footer/footer";
import Link from "next/link";
import e from "express";

// esse componente React parece estar configurado para atualizar os dados de uma obra de arte, utilizando os 
//estados para armazenar informações e o roteador para direcionar o usuário após a conclusão da atualização.

export default function AtualizarCadastro({ params }) {
    const [nomeObra, setNome] = useState("");
    const [url, setImagem] = useState("");
    const [artista, setArtista] = useState("");
    const [dataProducao, setData] = useState("");
    const [tipo, setTipo] = useState("");
    const [idadeArtista, setIdade] = useState("");
    const { id } = params;
    const router = useRouter();
//este trecho de código busca informações específicas de uma obra de arte na API utilizando o ID fornecido, 
//e preenche os campos do formulário de cadastro com esses detalhes para permitir a edição ou atualização dos dados.
    useEffect(() => {
        async function BuscarObra() {
            try {
                const resposta = await axios.get(`/API/cadastro/${id}`);
                const cadastro = resposta.data;
                setNome(cadastro.nomeObra);
                setImagem(cadastro.url);
                setArtista(cadastro.artista);
                setData(cadastro.dataProducao);
                setTipo(cadastro.tipo);
                setIdade(cadastro.idadeArtista);
            } catch (error) {
                console.error("ERROR BUSCAR OBRA:", error);
            }
        }
        //esse código trata da atualização dos dados da obra de arte na API quando o formulário é submetido, 
        //utilizando o método PUT da API para enviar os novos dados e redirecionar o usuário após a conclusão da atualização.
     if (id) {
            BuscarObra();
        }
    }, [id]);
    const handleSubmit = async (e) => {
        e.prevenirObra();
//este trecho de código trata da requisição de atualização dos dados da obra de arte na API e do redirecionamento
//do usuário para a página de cadastro após a operação ser concluída com êxito. Em caso de falha, exibe 
//informações do erro no console para fins de depuração.
        try {
            await axios.put(`/API/cadastro/${id}`, { nomeObra, url, artista, dataProducao, tipo, idadeArtista });
            router.push(`/cadastro/`);
        } catch (error) {
            console.error("Error atualizar cadastro", error);
        }
    };
//Este trecho de código representa uma estrutura de interface de usuário em React. Ele cria contêineres e um 
//botão estilizado que redireciona o usuário para a página de cadastro quando clicado. As classes de estilo 
//definem a aparência desses elementos na interface.
    return (
        <div className={style.container}>
         <div className={style.acoes}> 
          <Link href={`/cadastro`}>
            <button className={`${style.button} ${style.primeirobtn}`}>
              Voltar para Obras
            </button>
          </Link>
         </div>
        <div className={style.cadastroContaners}>
    
            <h1 className={style.mainprincipal}>Atualizar Obra</h1>
            {id ? (
                <form onSubmit={handleSubmit}>
                    <div className={style.forms}>
                        <label htmlFor="nomeObra">
                            Nome da Obra:
                        </label>
                        <input type="text"
                            className={style.input}
                            id="nomeObra"
                            value={nomeObra}
                            onChange={(e) => setNome(e.target.value)}
                            required />
                    </div>
                    <div className={style.forms}>
                        <label htmlFor="url">
                            Imagem da Obra:
                        </label>
                        <input type="text"
                            className={style.input}
                            id="url"
                            value={url}
                            onChange={(e) => setImagem(e.target.value)}
                            required />
                    </div>
                    <div className={style.forms}>
                        <label htmlFor="artista">
                            Nome do Artista:
                        </label>
                        <input type="text"
                            className={style.input}
                            id="artista"
                            value={artista}
                            onChange={(e) => setArtista(e.target.value)}
                            required />
                    </div>
                    <div className={style.forms}>
                        <label htmlFor="dataProducao">
                            Data de Produção:
                        </label>
                        <input type="text"
                            className={style.input}
                            id="dataProducao"
                            value={dataProducao}
                            onChange={(e) => setData(e.target.value)}
                            required />
                    </div>
                    <div className={style.forms}>
                        <label htmlFor="tipo">
                            Tipo de Obra:
                        </label>
                        <input type="text"
                            className={style.input}
                            id="tipo"
                            value={tipo}
                            onChange={(e) => setTipo(e.target.value)}
                            required />
                    </div>
                    <div className={style.forms}>
                        <label htmlFor="idadeArtista">
                            Idade do Artista:
                        </label>
                        <input type="text"
                            className={style.input}
                            id="idadeArtista"
                            value={idadeArtista}
                            onChange={(e) => setNome(e.target.value)}
                            required />
                    </div>
    
                    <button
                        type="submit"
                        className={`${style.button} ${style.submitButton}`}>
                        Atualizar
                    </button>
                </form>
            ) : (
                <p>Carregando...</p>
            )
    }
    
        </div>
        </div>
    );
}
//Esse código possibilita a atualização das informações de uma obra por meio de um formulário interativo na 
//interface do usuário.


