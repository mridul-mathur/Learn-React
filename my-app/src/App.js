import React from 'react';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players:[],
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())//this is a promise also we are getting the response from the api, then we are converting it into json.
    .then(users => this.setState({players:users}));//then we are setting the state of the players to the users
}
  render(){
    return(
      <div className="App"> 
        {this.state.players.map((player) => {
            return <div key={player.id}><h1>{player.name}</h1></div>;}) 
            //when ever we use map we need to have a key to highest element i.e. Div here
        }
      </div>
    );
  }}
export default App;
//it allows us to tell react what we expect this component to render and how we expect it to render.
/*[ { name: 'Steph Curry',
      id : '12d2j431'
    },
    { name: 'Michael Jordan',
      id : '12d2j432'},
    { name: 'LeBron James',
      id : '12d2j433'
    },
    { name: 'Giannis Antetokounmpo',
      id : '12d2j434' 
    },
    { name: 'Shaq O\'Neal',
      id : '12d2j435'
    },
  ]*/