import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players:[
        { name: 'Steph Curry'},
        { name: 'Michael Jordan'},
        { name: 'LeBron James'},
        { name: 'Giannis Antetokounmpo'},
        { name: 'Shaq O\'Neal'},
      ]
    };
  }
  render(){
    return(
      <div className="App"> 
        { this.state.players.map((player) => {
            return <h1>{player.name}</h1>;
          })
        }
      </div>
    );
  }}
export default App;
//it allows us to tell react what we expect this component to render and how we expect it to render.