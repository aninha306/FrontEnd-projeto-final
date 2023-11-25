
import style from './pageIndex.module.css'

function Home() {
  return (
    <div className={style.main} >
      <header></header>
      <h1>arte alem da tela.</h1>
      <div className={style.qudrosDiv}>
        
        <img className={style.imgsQuadrosFixos} src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
        <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
        <div className={style.testoDiv}>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button  className={style.button} >saiba mais...</button> 
          <button className={style.button}></button>
          <button className={style.button}>excluir</button>

        </div>
      </div>

      <div className={style.qudrosDiv}>
        <img className={style.imgsQuadrosFixos} src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/02/nascimento-de-venus-artes.jpg"  alt="" />
        <p className={style.direitos}>  As imagens podem ter direitos autorais.</p>
        <div className={style.testoDiv}>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button className={style.button}>saiba mais sobre a obra...</button>
          
          <button  className={style.button}>editar</button>
          <button className={style.button}>excluir</button>
        </div>
      </div>

      <div className={style.qudrosDiv}>
        <img className={style.imgsQuadrosFixos} src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
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
        <img className={style.imgsQuadrosFixos} src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
        <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
        <div className={style.testoDiv}>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button className={style.button}>saiba mais sobre a obra...</button>
          <button className={style.button}>editar</button>
          <button className={style.button}>excluir</button>
        </div>
      </div>
    </div>

    
  )
}export default Home;
