import React from 'react'

import './styles.css'

import Header from '../../components/Header'

import avatar from '../../assets/avatar.png'

const Inicio = () => (
  <div id="inicio">
    <Header />
    <main className="interface">
      <div id='subinicio'>
        <h1>Bem vindo(a) a nosso site To dev</h1>
        <div id="hgroup">
          <h2>
            Esse site foi criado para trazer tutorias de html a banco de dados.
            Compartilho você algumas solução de forma clara e objetiva.
          </h2>
          <h2>  
            Se o esse site ti ajudou considere doar algum valor para ajudar
            a manter o projeto e trazer melhorias, segue o botão de doaçao
            abaixo via paypal.
          </h2>
        </div>

      </div>
      
    </main>
    <footer>
      <img src={avatar} alt='avatar'/>
      <div id="final">
        <div id="links">
          <a href='https://www.linkedin.com/in/edson-m-souza-621ab4182/' className='icones' id='icon-linkedin'></a>
          <a href='https://www.instagram.com/edsonmelo754/' className='icones' id='icon-instagram'></a>
          <a href='https://github.com/EdsonMello-code' className='icones' id='icon-github' target='_blank'></a>
            {/* <a href="#" >Mega Hank</a> */}
        </div>
      <p>Criador por Edson</p>
      </div>
    </footer>
  </div>
)

export  default Inicio;