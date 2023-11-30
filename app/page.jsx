
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
          <img height={"210px"} className={style.imgsQuadrosFixos} src="data:image/jpeg;base64,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" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>
            <button className={style.button}>saiba mais sobre a obra...</button>
            <button className={style.button}>editar</button>
            <button className={style.button}>excluir</button>
          </div>
        </div>


        <div className={style.qudrosDiv}>
          <img height={"220px"} className={style.imgsQuadrosFixos} src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_g/13945/6311896.jpg" alt="" />
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
          <img className={style.imgsQuadrosFixos} src="https://arteeartistas.com.br/wp-content/uploads/2017/01/Impress%C3%A3o-Sol-Nascente.-Claude-Monet.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2> <s></s></h2>
            <h2> </h2>
            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>saiba mais...</button>

          </div>
        </div>

        <div className={style.qudrosDiv}>
          <img className={style.imgsQuadrosFixos} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/1139px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg" alt="" />
          <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
          <div className={style.testoDiv}>
            <h2>nome da obra:</h2>
            <h2>nome do artista:</h2>

            <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
            <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
            <button className={style.button}>saiba mais...</button>

          </div>
        </div>

        <button>SAIBA MAIS</button>
        <Footer></Footer>

      </div>



    </>
  )
} export default Home;
