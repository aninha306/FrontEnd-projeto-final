import React, { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import style from "./pageIndex.module.css";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import axios from "axios";
import ArteLoading from "./components/loading/loading";
import { useRouter } from "next/navigation";

function Home() {
  const [artes, setArtes] = useState([]);
  const [filtroArte, setFiltroArte] = useState("");
  const [deleteArte, setDeleteArte] = useState(1);
  const [updateArte, setUpdateArte] = useState(1);
  const router = useRouter();

  useEffect(() => {
    async function BuscarObra() {
      try {
        let queryParams = "";
        if (filtroArte) {
          queryParams += `tipo=${filtroArte}`;
        }
        const resposta = await axios.get(`/API/artes?${queryParams}`);
        setArtes(resposta.data.artes);
      } catch (error) {
        console.error("Erro ao buscar obras de arte:", error);
      }
    }
    BuscarObra();
  }, [filtroArte, deleteArte, updateArte]); // Corrigi o ponto no array de dependências

  const deletarArte = async (id) => {
    try {
      await axios.delete(`/API/artes/${id}`);
      setDeleteArte(deleteArte + 1); // Atualiza o estado para recarregar as obras após a exclusão
    } catch (error) {
      console.error("Erro ao excluir a obra de arte:", error);
    }
  };

  const editarArte = async (id) => {
    router.push(`/teste/${id}`); // Redireciona para a página de edição com o ID da obra
  };

  return (
    <>
      <Header />
      <div className={style.principal}>
     
        <div className={style.poster}>
        <div className={style.thiago}>
          <>
            <h1 className={style.titulo}>Arte Além da Tela</h1>
          </>
          <div className={style.img}>
            <img
              src="https://photoarts.com.br/magazine/wp-content/uploads/sites/2/2021/07/artur-matosyan-4YWUMaftmag-unsplash-1-1.jpg"
              width={1290}
              height={600}
              alt=""
            />
          </div>

          <div className={style.infos}>
            <p className={style.textoInfo}>
              A definição de arte é uma questão complexa e muitas vezes subjetiva, pois a arte abrange uma ampla gama de formas
              de expressão criativa e manifestações culturais. Ao longo da história, diferentes culturas e períodos de tempo
              têm apresentado concepções distintas sobre o que constitui a arte. No entanto, algumas características e
              princípios fundamentais podem ser explorados para compreender melhor essa manifestação humana.
            </p>
            <p className={style.textoInfo}>
              A arte, em sua essência, é uma forma de comunicação e expressão. Ela transcende a linguagem verbal, permitindo
              que os artistas transmitam ideias, emoções, conceitos e experiências através de diferentes meios. Pode ser
              visual, como pintura e escultura; auditiva, como música e poesia; cênica, como teatro e dança; ou uma
              combinação de várias formas, como no cinema.
            </p>
          </div>

          <div className={style.mainFiltro}>
          <div >
            <select
              value={filtroArte}
              onChange={(e) => setFiltroArte(e.target.value)}
              className={style.filtrinho}
            >
              <option>Mostrar Todas as Obras</option>
              <option value="Óleo sobre tela">Óleo sobre tela</option>
              <option value="Pintura histórica">Pintura histórica</option>
              <option value="Alegoria">Alegoria</option>
              <option value="Tinta a óleo ">Tinta a óleo </option>
              <option value="Barroco">Barroco</option>
              <option value="Modernismo no Brasil">Modernismo no Brasil </option>
              <option value="Aquarela">Aquarela</option>
              <option value="Guache">Guache</option>
              <option value="Acrílica">Acrílica</option>
              <option value="Afresco">Afresco</option>
              <option value="Mural">Mural</option>
              <option value="Têmpera">Têmpera</option>
            </select>
          </div>
         </div>
          
         
        
          {artes ? (
            artes.map((arte) => (
              <div key={arte.id}>
                <div className={style.main}>  
                  <div className={style.qudrosDiv}>
                    <img src={arte.url} className={style.imgsQuadrosFixos} alt={arte.nomeObra} />
                    <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
                    <div className={style.testoDiv}>
                      <p>{arte.nomeObra}</p>
                      <p>{arte.artista}</p>
                      <p>{arte.tipo}</p>
                      <button className={style.button} onClick={() => deletarArte(arte.id)}>
                        <RiDeleteBinLine color="white" fontSize={25} />
                      </button>
                      <button className={style.button} onClick={() => editarArte(arte.id)} >
                        <FaEdit color="white" fontSize={25} />
                      </button>
                      <button className={style.button}>
                        Ver mais informações
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <ArteLoading />
          )}
</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
