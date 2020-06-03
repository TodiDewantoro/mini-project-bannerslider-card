import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Beranda} from './pages/beranda'
import {Kategori} from './pages/kategori'
import {BeritaTerkini} from './pages/beritaterkini'
import {NoMatch} from './pages/nomatch'


class Routes extends React.Component {
    render () {
      return (
      <React.Fragment>
        
        <Router>
          <Switch>
            <Route exact path="/" component={Beranda} /> 
            <Route path="/kategori" component={Kategori} /> 
            <Route path="/beritaterkini" component={BeritaTerkini} />
            <Route component={NoMatch} />
            
          </Switch>
        </Router>
        
  
      </React.Fragment>
      );
    }
  }
  
  
  
  export default Routes;