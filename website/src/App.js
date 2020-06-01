import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn.js'
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home.js';
import SignUp from './components/auth/SignUp.js'

class App extends React.Component{

  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
