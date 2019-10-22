import React from 'react';
import './App.css';
import { getGif } from './services/api-helper'
import Gif from './components/Gif'
import Remote from './components/Remote'
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

  // componentDidMount = async () => {
  //   let Gif = await getGif();
  //   console.log(Gif)
  // }
  // handleChange = (e) => {
  //   const input = e.target.value
  //   if (e.target.id === 'input') {
  //     this.setState({
  //       input: value

  //     })
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" render={() => (<Home gif={this.state.Gif} handleChange={this.handleChange} />)} />
        <Route path="/about" render={() => (<About />)} />
        <Footer />
      </div>
    );
  }
}


export default App;
