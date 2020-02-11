import React, {Component} from 'react';

import Header from './Header'
import Player from './Player'

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    console.log(index, delta)
    // this.setState( prevState => ({
    //   score: prevState.score + delta
    // }));
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          totalPlayers={this.state.players.length} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            removePlayer={this.handleRemovePlayer}
            score={player.score}
            changeScore={this.handleScoreChange}          
          />
        )}
      </div>
    );
  }
}

export default App;
