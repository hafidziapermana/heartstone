import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CardLists from './components/pages/CardLists'
// import SingleCard from './component/pages/SingleCard.js'
// import NotFound from '.component/pages/NotFound.js'

import './assets/styles/style.css'
import '../node_modules/normalize.css'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={CardLists} />
      {/*<Route path="/cards/:cardid" component={SingleCard} />*/}
      {/*<Route component={NotFound} />*/}
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.querySelector('#root'));