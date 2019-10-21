import React from 'react';
import './App.css';
import { getGif } from './services/api-helper'
import Gif from './components/Gif'
import Remote from './components/Remote'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Gif: 'https://media.giphy.com/media/iF3M9gPPCdulq/giphy.gif',
      // 0: "https://api.giphy.com/v1/gifs/search?api_key=4U0PVhxOfDITL46CHMTrUUXOxSs0J4Wg&q=news&limit=25&offset=0&rating=G&lang=en",
      // 1: "https://api.giphy.com/v1/gifs/search?api_key=4U0PVhxOfDITL46CHMTrUUXOxSs0J4Wg&q=weather&limit=25&offset=0&rating=G&lang=en",
      // 2: "https://api.giphy.com/v1/gifs/search?api_key=4U0PVhxOfDITL46CHMTrUUXOxSs0J4Wg&q=dogs&limit=25&offset=0&rating=G&lang=en",
      // 3: "https://api.giphy.com/v1/gifs/search?api_key=4U0PVhxOfDITL46CHMTrUUXOxSs0J4Wg&q=food&limit=25&offset=0&rating=G&lang=en",
      // 4: "https://api.giphy.com/v1/gifs/search?api_key=4U0PVhxOfDITL46CHMTrUUXOxSs0J4Wg&q=cats&limit=25&offset=0&rating=G&lang=en",
    }
  }


  handleChange = async (e) => {
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
        <Gif gif={this.state.Gif} />
        <Remote handleChange={this.handleChange} />
      </div >
    );
  }
}


export default App;
