'use client'
import { useState } from "react";
import style from "@/app/componets/cadastro/cadastro.module.css";
import Usuario from "@/app/models/Cadastroo/cadastro";
import Usuarios from "@/app/models/Cadastroo/cadastros";
import Header from "../header/header";
import Footer from "../footer/footer";

const usuarios = new Usuarios();

function Cadastro() {
    const [aux, setAux] = useState(null);

    let vazio = '';

    const [nome, setNome] = useState(vazio);
    const [imglink, setimglink] = useState(vazio);
    const [artista, setArtista] = useState(vazio);
    const [data, setData] = useState(vazio);
    const [tipo, setTipo] = useState(vazio);
    const [idadeartista, setIdadeArtista] = useState(vazio);

    const [show, setShow] = useState(false);
    const [lista, setLista] = useState(usuarios.lista);
    const showUsuario = () =>{
        if (nome.trim() == '' || imglink.trim() == '' || artista.trim() == '' || data.trim() == '' || tipo.trim() == '' || idadeartista.trim() == ''){
            alert ("teste")
        }else{
            const usuario = new Usuario(nome, imglink, artista, data, tipo, idadeartista);
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
       const Edit =(nome, imglink, artista, data, tipo, idadeartista, id) => {
        setShow(true);

        setNome(nome);
        setimglink(imglink);
        setArtista(artista);
        setData(data);
        setTipo(tipo);
        setIdadeArtista(idadeartista);

        setAux(id);
       }
      const editUsuario = () => {
        usuarios.editUsuario(aux,nome, imglink, artista, data, tipo, idadeartista);

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
     const delet = (id) => {
        let already = false;

        usuarios.lista.map((usuario) => (
            usuario.id == id ? already = true : already
        ));
        if (already){
            usuarios.deletarUsuario(id);
            setLista(usuarios.lista);
        }
     }

    return(

    
}
