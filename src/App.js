import React, { Component } from 'react';
import styles from './App.module.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import Pokdetails from './pages/Pokdetails/Pokdetails';
import Catalogue from './components/Catalogue';
import Appbar from './components/Appbar';





class App extends Component {
  render() {
    return (
      <div className={styles.app}>
      <header>
      <Appbar/>
      </header>
        <main>
        
            <Route exact path="/"  component={Feed} />
            <Route exact path="/Pokdetails/:req" exact strict component={Pokdetails} />  
         
        </main>
      </div>
    );
  }
}

export default App;
