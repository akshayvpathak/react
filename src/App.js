import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import {DISHES } from './shared/dishes';
import { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
        <div className="App">
          <Main />
        </div>
    );
  }
}


export default App;
