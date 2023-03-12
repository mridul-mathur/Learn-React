import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      name:{firstname:'Sakshi', lastname:'Beniwal'},
      occupation : 'Graphic Designer'
    };
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstname} {this.state.name.lastname} I am {this.state.occupation}</p>
          <button 
            onClick={() => {
              this.setState({name:{firstname:'Mridul',lastname:'Mathur'}, occupation:'Web Developer'});
              console.log(this.state);
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }}
export default App;
//it allows us to tell react what we expect this component to render and how we expect it to render.