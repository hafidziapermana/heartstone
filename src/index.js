import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CardLists from './components/pages/CardLists'
// import SingleCard from './component/pages/SingleCard.js'
// import NotFound from '.component/pages/NotFound.js'

import '../node_modules/normalize.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

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
