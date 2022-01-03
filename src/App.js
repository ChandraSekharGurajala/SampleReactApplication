import logo from './logo.svg';
import './App.css';
import Home from './Components/home';
import About from './Components/about';
import Data from './Components/data';
import Dataitem from './Components/dataitem';
import Register from './Components/Register';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './Components/Login';
import { Form } from 'react-bootstrap';
import Registerget from './Components/registerget';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Switch>
     {/* <Route exact path='/' component={Register} /> */}
     <Route exact path='/' component={Home} />
     <Route exact path='/about' component={About} />
     <Route exact path='/data' component={Data} />
     <Route exact path='/dataitem' component={Dataitem} /> 
     <Route exact path='/register' component={Register} /> 
     <Route exact path='/registerget' component={Registerget} />

  

   </Switch>
   </BrowserRouter>
   </div>
  );
}

export default App;
