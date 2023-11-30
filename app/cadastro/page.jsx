'use client'
import { useState } from "react";
import style from "./cadastro.module.css";
import Usuario from "@/app/models/Cadastroo/cadastro";
import Usuarios from "@/app/models/Cadastroo/cadastros";
import Header from "../componets/header/header";
import Footer from "../componets/footer/footer";

//const responsavel por adicionar um novo usuario
const usuarios = new Usuarios();

//funcao responsavel por cadastrar um novo usuario
function Cadastro() {
    
    const [aux, setAux] = useState(null);

    let vazio = '';

    //const responsavel pelo nome da obra
    const [nomeobra, setNome] = useState(vazio);
    //const responsavel pela imagem
    const [imglink, setimglink] = useState(vazio);
    //const responsavel pelo nome do artista
    const [artista, setArtista] = useState(vazio);
    //const responsavel pela data
    const [data, setData] = useState(vazio);
    //const responsavel pelo tipo de obra
    const [tipo, setTipo] = useState(vazio);
    //const responsavel pela idade do artista
    const [idadeartista, setIdadeArtista] = useState(vazio);

    //const responsavel por mostrar a obra e dados do usuario
    const [show, setShow] = useState(false);
    //const responsavel por montar uma lista de obras/usuarios
    const [lista, setLista] = useState(usuarios.lista);

    //const responsavel por mostrar o usuario a partir do nome,imagem,artista,data, tipo e idade.
    const showUsuario = () => {
        if (nomeobra.trim() == '' || imglink.trim() == '' || artista.trim() == '' || data.trim() == '' || tipo.trim() == '' || idadeartista.trim() == '') {
            
        } else {
            const usuario = new Usuario(nomeobra, imglink, artista, data, tipo, idadeartista);
            usuarios.addUsuario(usuario);
            setNome(vazio);
            setimglink(vazio);
            setArtista(vazio);
            setData(vazio);
            setTipo(vazio);
            setIdadeArtista(vazio);

            console.log(usuarios.lista);
        }
    }

    //const responsavel por editar nome.imagem, artista, data, tipo e idade.
    const Edit = (nomeobra, imglink, artista, data, tipo, idadeartista, id) => {
        setShow(true);

        setNome(nomeobra);
        setimglink(imglink);
        setArtista(artista);
        setData(data);
        setTipo(tipo);
        setIdadeArtista(idadeartista);

        setAux(id);
    }

    //const responsavel por editar o usuario
    const editUsuario = () => {
        usuarios.editUsuario(aux, nomeobra, imglink, artista, data, tipo, idadeartista);

        setNome(vazio);
        setimglink(vazio);
        setArtista(vazio);
        setData(vazio);
        setTipo(vazio);
        setIdadeArtista(vazio);

        setLista(usuarios.lista);
        setShow(false);
        setAux(null);
    }

    //const responsavel por deletar o usuario pelo id
    const delet = (id) => {
        let already = false;

        usuarios.lista.map((usuario) => (
            usuario.id == id ? already = true : already
        ));
        if (already) {
            usuarios.deletarUsuario(id);
            setLista(usuarios.lista);
        }
    }

    //retornar na tela os dados
    return (

        <main>
            <Header></Header>
            <div className={style.mainContent}>
                <h1>Cadastros</h1>
                <article className={style.cadastroform}>
                    <section className={style.inputs}>
                        <input type="text"
                            value={nomeobra}
                            onChange={(param) => {
                                setNome(param.target.value);
                            }}
                            placeholder="Nome da Obra"
                            className={style.infos}
                        />
                    </section>
                    <section className={style.inputs}>
                        <input type="file"
                            value={imglink}
                            onChange={(param) => {
                                setimglink(param.target.value);
                            }}
                            placeholder="Imagem da Obra"
                            className={style.infos}
                        />
                    </section>
                    <section className={style.inputs}>
                        <input type="text"
                            value={artista}
                            onChange={(param) => {
                                setArtista(param.target.value);
                            }}
                            placeholder="Nome do Artista"
                            className={style.infos}
                        />
                    </section>
                    <section className={style.inputs}>
                        <input type="date"
                            value={data}
                            onChange={(param) => {
                                setData(param.target.value);
                            }}
                            placeholder="Data de Produção"
                            className={style.infos}
                        />
                    </section>
                    <section className={style.inputs}>
                        <input type="text"
                            value={tipo}
                            onChange={(param) => {
                                setTipo(param.target.value);
                            }}
                            placeholder="Tipo da Obra"
                            className={style.infos}
                        />
                    </section>
                    <section className={style.inputs}>
                        <input type="number"
                            value={idadeartista}
                            onChange={(param) => {
                                setIdadeArtista(param.target.value);
                            }}
                            placeholder="Idade do Artista"
                            className={style.infos}
                        />
                    </section>

                    <section className={style.divBotao}>
                        {
                            show && (
                                <button onClick={editUsuario} className={style.botao}>Editar</button>
                            )
                        }
                        {
                            !show && (
                                <button onClick={showUsuario} className={style.botao}>Cadastrar</button>
                            )
                        }
                    </section>
                </article>
                <article className={style.usuarioLista}>
                    <section className={style.secusuarios}>
                        {
                            //usuario lista responsavel pelos campos de nome da obra, nome do artista, data de produçao, tipo de arte, 
                            //idade do artista e id.
                            lista.map((usuario) => (
                                <div key={usuario.id} className={style.usuarios}>
                                    <div className={style.lista}>
                                        <p><strong>Nome da Obra:</strong> {usuario.nomeobra}</p>
                                        <p><strong>Artista:</strong> {usuario.artista}</p>
                                        <p><strong>Data de Produção:</strong> {usuario.data}</p>
                                        <p><strong>Tipo da Arte:</strong> {usuario.tipo}</p>
                                        <p><strong>Idade do Artista:</strong> {usuario.idadeartista}</p>
                                        <p><strong>Id:</strong> {usuario.id}</p>
                                    </div>
                            
                                    <div className={style.botaoCadastro}>
                                        <button onClick={() => Edit(usuario.nomeobra, usuario.imglink, usuario.artista,usuario.data,usuario.tipo, usuario.idadeartista, usuario.id)} className={style.botaoeditar}>Editar</button>
                                        <button onClick={() => delet(usuario.id)} className={style.botaodeletar}>Excluir</button> 
                                    </div>
                                </div>
                            ))
                        }

                    </section>
                </article>
            </div>
        </main>
    )
}

    export default Cadastro;
    //exportar funçao de cadastrp