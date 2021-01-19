import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/About';
import Articles from './pages/About';
import './styles.css';


const App = () => {
  return (
    <div className="App">
     
       <Switch>
         <Route path="/home/about" component={Home}/>
         <Route path="/Portfolio" component={Portfolio}/>
         <Route path="/articles" component={Articles}/>
         <Route path="/" component={Home}/>
       </Switch>
     
    </div>
  );
}

export default App;