import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Inicio from './pages/Inicio'

const routes = () => {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exec path='/devfront' component={Inicio} />

      </Switch>
    </BrowserRouter>
  )
}


export default routes