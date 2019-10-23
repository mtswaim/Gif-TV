import React from 'react';
import './App.css';
import { getGif } from './services/api-helper'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import About from './components/About'
import Nav from './components/Nav'
import Home from './components/Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Gif: 'https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif',

    }
  }



  handleChange = async (e) => {
    this.setState({
      Gif: "https://media.giphy.com/media/Ph0oIVQeuvh0k/giphy.gif"
    })
    const Gif = await getGif(e.target.name)
    if (Gif) {
      this.setState({ Gif })
    }
  }
  handleChangeAlso = async (e) => {

    if (this.state.Gif === "https://media.giphy.com/media/l2SpYkv5xHz7E4zYI/giphy.gif") {
      this.setState({
        Gif: 'https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif'
      })
    } else {
      this.setState({
        Gif: "https://media.giphy.com/media/l2SpYkv5xHz7E4zYI/giphy.gif"
      })
    }
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={() => (<Home gif={this.state.Gif} handleChange={this.handleChange} handleChangeAlso={this.handleChangeAlso} />)} />
        <Route path="/about" render={() => (<About />)} />
        <Footer />
      </div>
    );
  }
}


export default App;
