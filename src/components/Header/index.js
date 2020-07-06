import React from 'react'

import './styles.css'

const index = () => {
  return (
    <header>
      <h1>Logo</h1>
      <nav>
        <a href="#">Início</a>
        <a href="#">Categorias</a>
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
      </nav>

      <div id="search">
        <input type="text"/>
        <button>Pesquisar</button>
      </div>
    </header>
  )
}

export default index
