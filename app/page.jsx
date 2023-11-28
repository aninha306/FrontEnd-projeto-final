
import Header from './componets/header/header';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Footer from './componets/footer/footer';



import style from './pageIndex.module.css'

function Home() {
  return (
    <>
      <Header></Header>
      <div className={style.main} >
      
        <div className={style.qudrosDiv}>

          <img className={style.imgsQuadrosFixos} src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} /></button>
            <button className={style.button}><FaEdit color={"white"} /></button>
            <button className={style.button} >saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/02/nascimento-de-venus-artes.jpg" alt="" />
          <p className={style.direitos}>  As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra: Noite Estrelada</h2>
            <h2>nome do artista:</h2>


            <button className={style.button}><RiDeleteBinLine color={"white"} /></button>
            <button className={style.button}><FaEdit color={"white"} /></button>
            <button className={style.button} >saiba mais...</button>
          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://cdn.pensador.com/img/imagens/ob/ra/obras_de_arte_famosas_f_l.jpg?class=ogImageWide" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>
            <button className={style.button}><RiDeleteBinLine color={"white"} /></button>
            <button className={style.button}><FaEdit color={"white"} /></button>
            <button className={style.button}>saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/02/obra-de-arte-o-grito-edvard-munch.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://aventurasnahistoria.uol.com.br/media/_versions/capa_ivan_o_terrivel_pintura_filho_morto_historia_widelg.jpeg " alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://s1.static.brasilescola.uol.com.br/img/2018/07/a_persistencia_da_memoria.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>

          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img height={"210px"} className={style.imgsQuadrosFixos} src="https://laart.art.br/wp-content/uploads/2020/07/pinturasfamosasbrasileiras4.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>Nome da Obra:</h2>
            <h2>Nome do Artista:</h2>
            <button className={style.button}>Saiba mais sobre a obra...</button>
            <button className={style.button}>Editar</button>
            <button className={style.button}>Excluir</button>
          </div>
        </div>


        <div className={style.qudrosDiv}>
          <img height={"220px"} className={style.imgsQuadrosFixos} src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_g/13945/6311896.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>Nome da Obra:</h2>
            <h2>Nome do Artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://arteeartistas.com.br/wp-content/uploads/2017/01/Impress%C3%A3o-Sol-Nascente.-Claude-Monet.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>Nome da Obra:</h2>
            <h2>Nome do Artista:</h2>
            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1139px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>Nome da Obra:</h2>
            <h2>Nome do Artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>Saiba mais...</button>

          </div>
        </div>
        <Footer></Footer>

      </div>



    </>
  )
} export default Home;
