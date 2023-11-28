import Usuario from "./cadastro";

export default class Usuarios{
    constructor(){
        this.lista = [];
    }
    addUsuario(usuario){
        this.lista.push(usuario);
    }
    deletarUsuario(id){
        return this.lista = this.lista.filter(usuario => usuario.id !== id);
    }
    editUsuario(id, nomeobra, imglink, artista, data, tipo, idadeartista){
        this.lista.map((usuario) => {
        if(usuario.id == id){
            usuario.nomeobra = nomeobra;
            usuario.imglink = imglink;
            usuario.artista = artista;
            usuario.data = data;
            usuario.tipo = tipo;
            usuario.idadeartista = idadeartista;
        }
        });

    }
}