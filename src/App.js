import React from 'react';
import './App.css';
import getGames from './services/api-helper'

class App extends React.Component {




  componentDidMount = async () => {
    let Games = await getGames();
    this.setState({
      Games
    })
    console.log(Games)
  }

  render() {
    return (
      <div className="App">
        <>
        </>
      </div>
    );
  }
}

export default App;
