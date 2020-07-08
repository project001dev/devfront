import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

const index = () => {
  return (
    <header id='header-i'>
      <h1>Logo</h1>
      <nav>
        <ul>
          <li><Link to='/'>Início</Link></li>
          <li><Link to='#' id='categorias'>Categorias</Link>
            <ul class="sub-menu">
              <li><a href="#">Data Base</a></li>
              <li><a href="#">Web</a></li>
              <li><a href="#">Mobile</a></li>
            </ul>
          </li>
          <li><Link to='#'>Contato</Link></li>
          <li><Link to='#'>Sobre</Link></li>
        </ul>
      </nav>

      <div id="search">
        <input type="text"/>
        <button><p>Pesquisar</p></button>
      </div>
    </header>
  )
}

export default index
