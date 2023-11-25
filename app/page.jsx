import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div id='main' >
      <header></header>
      <h1>arte alem da tela.</h1>
      <div className='qudros-div'>
        <img className='imgs-quadrosFixos' src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
        <div className='testo-div'>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button>saiba mais sobre a obra...</button>
          <button>editar</button>
          <button>excluir</button>
        </div>
      </div>

      <div className='qudros-div'>
        <img className='imgs-quadrosFixos' src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/02/nascimento-de-venus-artes.jpg"  alt="" />
        <div className='testo-div'>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button>saiba mais sobre a obra...</button>
          <button>editar</button>
          <button>excluir</button>
        </div>
      </div>

      <div className='qudros-div'>
        <img className='imgs-quadrosFixos' src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
        <div className='testo-div'>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button>saiba mais sobre a obra...</button>
          <button>editar</button>
          <button>excluir</button>
        </div>
      </div>

      <div className='qudros-div'>
        <img className='imgs-quadrosFixos' src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
        <div className='testo-div'>
          <h2>nome da obra:</h2>
          <h2>nome do artista:</h2>
          <button>saiba mais sobre a obra...</button>
          <button>editar</button>
          <button>excluir</button>
        </div>
      </div>
    </div>

    
  )
}
