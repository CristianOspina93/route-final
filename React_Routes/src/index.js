import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './CSS/index.css';

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';
import Return from './components/Return';

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/return">Home</Link>
              <Route path="/return" component={Return} />
            </li>
            <li>
              <Link to="/happy">Happy</Link>
              <Route path="/happy" component={Happy} />
            </li>
            <li>
              <Link to="/guilty">Guilty</Link>
              <Route path="/guilty" component={Guilty} />
            </li>
            <li>
              <Link to="/sleepy">Sleepy</Link>
              <Route path="/sleepy" component={Sleepy} />
            </li>
          </ul>
          <hr />
        </div>
      </Router>

    )
  }

}

ReactDOM.render( <Home />, document.getElementById('root') );
