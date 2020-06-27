import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import SignIn from './components/auth/SignIn.jsx'
import Navbar from './components/layout/Navbar.jsx';
import Home from './components/home/Home.jsx';
import SignUp from './components/auth/SignUp.jsx';
import PandN from './components/profile/PandN.jsx'

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
            <Route path="/user/:id" component={PandN} />
        </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
