
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import style from './pageIndex.module.css'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

function Home() {
  return (
    <>
    <Header></Header>
    <div className={style.principal}>
      <div className={style.divtitulo}>
        <h1 className={style.titulo}>Arte Além da Tela</h1>
      </div>
      <div className={style.poster}>
        <img src="https://photoarts.com.br/magazine/wp-content/uploads/sites/2/2021/07/artur-matosyan-4YWUMaftmag-unsplash-1-1.jpg" width={1250} height={600} alt="" />
      </div>

      <div className={style.infos}>

        <p>
          A definição de arte é uma questão complexa e muitas vezes subjetiva, pois a arte abrange uma ampla gama de formas de expressão criativa e manifestações culturais. Ao longo da história, diferentes culturas e períodos de tempo têm apresentado concepções distintas sobre o que constitui a arte. No entanto, algumas características e princípios fundamentais podem ser explorados para compreender melhor essa manifestação humana.</p>
        <p>A arte, em sua essência, é uma forma de comunicação e expressão. Ela transcende a linguagem verbal, permitindo que os artistas transmitam ideias, emoções, conceitos e experiências através de diferentes meios. Pode ser visual, como pintura e escultura; auditiva, como música e poesia; cênica, como teatro e dança; ou uma combinação de várias formas, como no cinema.</p>
      </div>



      <div className={style.main} >



       



        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/02/obra-de-arte-o-grito-edvard-munch.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2 className={style.tituloquadro}>O grito. </h2>
            <h2 className={style.tituloquadro}> Edvard Munch</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://aventurasnahistoria.uol.com.br/media/_versions/capa_ivan_o_terrivel_pintura_filho_morto_historia_widelg.jpeg " alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2 className={style.tituloquadro}>Ivan, o Terrível </h2>
            <h2 className={style.tituloquadro}>Josef Stalin</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://s1.static.brasilescola.uol.com.br/img/2018/07/a_persistencia_da_memoria.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>

          <div className={style.testoDiv}>
            <h2 className={style.tituloquadro}> A persistência da memória</h2>
            <h2 className={style.tituloquadro}> Salvador Dali.</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img height={"210px"} className={style.imgsQuadrosFixos} src="https://cdn.culturagenial.com/imagens/tarsila-do-amaral-abaporu-cke.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2 className={style.tituloquadro}>Abaporu</h2>
            <h2 className={style.tituloquadro}> Tarsila do Amaral</h2>
            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>
          </div>
        </div>


        <div className={style.qudrosDiv}>
          <img height={"220px"} className={style.imgsQuadrosFixos} src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_g/13945/6311896.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2 className={style.tituloquadro}> Britto Garden</h2>
            <h2 className={style.tituloquadro}>Romero Britt</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://arteeartistas.com.br/wp-content/uploads/2017/01/Impress%C3%A3o-Sol-Nascente.-Claude-Monet.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>


            <h2 className={style.tituloquadro}>Impressão, nascer do sol</h2>
            <h2 className={style.tituloquadro}>Claude Monet</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1139px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2 className={style.tituloquadro}>Almond Blossom</h2>
            <h2 className={style.tituloquadro}>Van Gogh</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba Mais...</button>
            
          </div>
        </div>
        <Footer></Footer>
      </div>
      </div>
    </>
  )
} export default Home;
