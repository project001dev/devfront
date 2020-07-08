import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'

const routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exec path='/' component={Inicio} />
        <Route exec path='github' component='https://github.com/EdsonMello-code/Project-reactJS-and-express/blob/master/huntweb/src/routes.js' />

      </Switch>
    </BrowserRouter>
  )
}


export default routes