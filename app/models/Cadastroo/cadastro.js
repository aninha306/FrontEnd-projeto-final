export default class Usuario{
    constructor(nomeobra, imglink, artista, data, tipo, idadeartista){
        this.nomeobra = nomeobra;
        this.imglink = imglink;
        this.artista = artista;
        this.data = data;
        this.tipo = tipo;
        this.idadeartista = idadeartista;
        this.id = this.getId();   
     }

    getId(){
        return Math.floor(Math.random()* 9999);
    }
}